import React from 'react';
import DecisionStep from '@/components/accounting/DecisionStep';
import JournalBuilder from '@/components/accounting/JournalBuilder';
import TransactionFlow from '@/components/accounting/TransactionFlow';
import SoftwareBridge from '@/components/accounting/SoftwareBridge';
import TransferStep from '@/components/accounting/TransferStep';
import TroubleshootStep from '@/components/accounting/TroubleshootStep';
const step = (name, auto, render) => ({ name, auto, render });
const software = step('Software connection', true, ({ lesson }) => <><h2 className="mb-5 text-xl font-bold">Here’s what the software is really doing.</h2><SoftwareBridge lesson={lesson} /></>);
const apply = step('Apply it', false, p => <TransferStep {...p} />);
const beginner = [
  step('Try it', false, p => <DecisionStep {...p} />),
  step('Build the journal', false, p => <JournalBuilder {...p} />),
  step('See the impact', true, ({ lesson }) => <TransactionFlow lesson={lesson} />),
  software, apply
];
const advanced = [
  step('The call', false, p => <TroubleshootStep {...p} />),
  step('Build the fix', false, p => <JournalBuilder {...p} title="Build the entry the books should hold." />),
  software, apply
];
export const stepsFor = difficulty => (difficulty === 'advanced' ? advanced : beginner);