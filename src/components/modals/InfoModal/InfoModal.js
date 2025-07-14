import React from "react";
import { MAX_MISTAKES } from "../../../lib/constants";
import { Info } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../ui/accordion";
import BaseModal from "../BaseModal";

function InfoModal() {
  return (
    <BaseModal
      title=""
      trigger={<Info className="mr-4" />}
      initiallyOpen={false}
      actionButtonText="Got It!"
    >
      <h2 className="text-lg font-semibold mb-4">How To Play</h2>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>What's The Goal?</AccordionTrigger>
          <AccordionContent>
            Find groups of items or names that share something in common.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>How Do I Play?</AccordionTrigger>
          <AccordionContent>
            Select the items and tap 'Submit' to check if your guess matches
            one of the answer categories.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>How Many Tries Do I Get?</AccordionTrigger>
          <AccordionContent>
            You have infinite tries but you will be ranked on the leaderboard by the number of mistakes you make. The fewer mistakes, the better your score! Ties will be broken by time taken to complete the puzzle.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </BaseModal>
  );
}

export default InfoModal;
