"use client";

import Image from "next/image";

import { Modal } from "@/components/shared/modal";
import { Button } from "@/components/ui/button";
import { DialogClose, DialogTitle } from "@/components/ui/dialog";
import type { TeamMemberModalProps } from "@/types/features/about";

function TeamMemberModal({ member, trigger }: TeamMemberModalProps) {
  const { name, role, image, description } = member;

  const achievements = description
    .split(",")
    .map((achievement) => achievement.trim())
    .filter(Boolean);

  return (
    <Modal
      trigger={trigger}
      classNames={{
        trigger: "block w-full text-left",
        content:
          "max-h-[calc(100dvh-2rem)] max-w-[calc(100%-2rem)] gap-0 overflow-hidden rounded-[12px] p-0 md:max-h-[calc(100dvh-4rem)] md:max-w-[700px] lg:max-w-[900px]",
      }}
    >
      <div className="grid min-h-0 grid-cols-1 overflow-y-auto md:max-h-[calc(100dvh-4rem)] md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] md:overflow-hidden">
        <div className="relative hidden w-full bg-[#F8F8F8] md:block md:min-h-[420px]">
          <Image
            src={image}
            alt={name}
            fill
            sizes="(min-width: 768px) 40vw, 1px"
            className="object-cover object-top"
          />
        </div>

        <div className="flex min-h-0 flex-col gap-4 p-5 md:gap-5 md:overflow-y-auto md:p-6 lg:gap-6 lg:p-8">
          <div className="flex flex-col gap-1 pr-8">
            <DialogTitle className="font-poppins text-[18px] font-semibold text-[#000000] md:text-[22px] lg:text-[24px]">
              About {name}
            </DialogTitle>
            <p className="text-[13px] font-normal text-[#494949] lg:text-[14px]">
              {role}
            </p>
          </div>

          <ul className="flex flex-col gap-3">
            {achievements.map((achievement) => (
              <li
                key={achievement}
                className="flex gap-2 text-[14px] font-normal break-words text-[#2D2D2D] lg:text-[16px]"
              >
                <span aria-hidden="true">&bull;</span>
                <span className="min-w-0">{achievement}</span>
              </li>
            ))}
          </ul>

          <div className="mt-auto flex justify-end pt-2">
            <DialogClose
              render={
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full text-[#1E3C8C] md:w-auto md:min-w-[140px]"
                />
              }
            >
              Close
            </DialogClose>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export { TeamMemberModal };
