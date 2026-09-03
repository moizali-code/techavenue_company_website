"use client";

import Image from "next/image";

import { Modal } from "@/components/shared/modal";
import { Button } from "@/components/ui/button";
import { DialogClose, DialogTitle } from "@/components/ui/dialog";
import type { TeamMemberModalProps } from "@/types/features/about";

function TeamMemberModal({ member, trigger }: TeamMemberModalProps) {
  const { name, image, description } = member;

  const achievements = description
    .split(",")
    .map((achievement) => achievement.trim())
    .filter(Boolean);

  return (
    <Modal
      trigger={trigger}
      showCloseButton={false}
      classNames={{
        trigger: "block w-full text-left",
        content:
          "max-w-[calc(100%-2rem)] gap-0 overflow-hidden rounded-[12px] p-0 md:max-w-[900px]",
      }}
    >
      <div className="grid md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
        <div className="relative aspect-[3/4] w-full bg-[#F8F8F8] md:aspect-auto md:min-h-[460px] lg:min-h-[460px]">
          <Image
            src={image}
            alt={name}
            fill
            sizes="(min-width: 768px) 40vw, 100vw"
            className="object-cover object-top"
          />
        </div>

        <div className="flex flex-col gap-6 p-6 lg:p-8">
          <DialogTitle className="font-poppins text-[22px] font-semibold text-[#000000] lg:text-[24px]">
            About {name}
          </DialogTitle>

          <ul className="flex flex-col gap-3">
            {achievements.map((achievement) => (
              <li
                key={achievement}
                className="flex gap-2 text-[14px] font-normal text-[#2D2D2D] lg:text-[16px]"
              >
                <span aria-hidden="true">&bull;</span>
                <span>{achievement}</span>
              </li>
            ))}
          </ul>

          <div className="mt-auto flex justify-end">
            <DialogClose
              render={
                <Button
                  variant="outline"
                  size="lg"
                  className="min-w-[140px] text-[#1E3C8C]"
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
