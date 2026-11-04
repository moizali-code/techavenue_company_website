const fs=require('node:fs'), vm=require('node:vm'), assert=require('node:assert/strict');
const ts=require('typescript');
const seed=require('./fixtures/cockpit.json');
const defaults={};vm.runInNewContext(ts.transpileModule(fs.readFileSync(__dirname+'/../lib/site-defaults.ts','utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS}}).outputText,{exports:defaults});
const api={};let empty=false,fail=false,large=false,wrapped=false;const requests=[];
vm.runInNewContext(ts.transpileModule(fs.readFileSync(__dirname+'/../lib/cms/cockpit.ts','utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS}}).outputText,{
 exports:api,process:{env:{COCKPIT_INTERNAL_URL:'http://cms.test',NEXT_PUBLIC_COCKPIT_URL:'http://localhost:8091',COCKPIT_API_KEY:'test-key'}},
 require:name=>{if(name==='@/lib/site-defaults')return defaults;throw new Error('Unexpected fallback/import: '+name);},
 fetch:async(url,options)=>{requests.push({url,options});const u=new URL(url),parts=u.pathname.split('/'),model=parts.at(-1),list=parts.at(-2)==='items';let value=seed[model];if(list){value=empty?[]:value;if(model==='Industries'&&!empty)value=large?Array.from({length:101},(_,i)=>({...value[0],uuid:'industry-'+i,title:'Industry '+i})):[{...value[0],title:'CMS-only industry title'}];const skip=Number(u.searchParams.get('skip')??0);value=value.slice(skip,skip+100);}else if(u.searchParams.has('filter')){const id=JSON.parse(u.searchParams.get('filter')).$or[0].uuid;value=value.find(row=>row.uuid===id)??false;}return{ok:!fail,status:fail?403:200,json:async()=>list&&wrapped?{data:value}:value};}
});
(async()=>{
 const industries=await api.getIndustries();assert.equal(industries.length,1);assert.equal(industries[0].title,'CMS-only industry title');
 large=true;assert.equal((await api.getIndustries()).length,101);large=false;wrapped=true;assert.equal((await api.getIndustries()).length,1);wrapped=false;
 const job=await api.getJob('test-job');assert.equal(job.title,'CMS job');assert.equal(job.description,'Job description from Cockpit');
 for(const[model,list,detail]of [['Industries','getIndustries','getIndustry'],['LegacySolutions','getLegacySolutions','getLegacySolution'],['SolutionPages','getSolutionPages','getSolutionPage']]){
   const item=await api[detail](seed[model][0].uuid);assert.equal(item.uuid,seed[model][0].uuid);assert.equal(item.title,seed[model][0].title);
 }
 const services=await api.getServicesPageData();assert.equal(services.allServicesArticles.length,seed.Services.articles.length);assert.equal(services.allServicesArticles[0].uuid,seed.Services.articles[0].uuid);assert.ok(services.allServicesArticles[0].features[0].image.includes('building-information-modeling.svg'));
 const news=await api.getNewsPageData();assert.equal(news.newsStories.length+1,2);assert.equal(news.events.length,1);
 const stories=await api.getSuccessStoriesPageData();assert.equal(stories.stories.length,1);assert.equal(stories.stories[0].industry.uuid,seed.SuccessStories[0].industryUuid);
 empty=true;assert.equal((await api.getIndustries()).length,0);assert.equal((await api.getNewsPageData()).featuredStory,null);
 fail=true;await assert.rejects(api.getIndustries(),/403/);
 assert.ok(requests.every(r=>r.options.cache==='no-store'&&r.options.headers['api-key']==='test-key'));
 console.log('PASS: direct collection arrays, stable detail URLs, service articles/icons, news/events, story filters, empty collections, API errors, uncached authenticated fetches');
})().catch(e=>{console.error(e.message);process.exitCode=1});
