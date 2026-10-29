const provider = process.env.CMS_PROVIDER ?? 'payload'

export * from provider === 'cockpit' ? './cockpit' : './payload'
