import { fundamentals } from '@/components/course/moduleFundamentals';
import { doubleEntry } from '@/components/course/moduleDoubleEntry';
import { cycle } from '@/components/course/moduleCycle';
import { statements } from '@/components/course/moduleStatements';
import { financial } from '@/components/course/moduleFinancial';
import { managerial } from '@/components/course/moduleManagerial';
import { gstHst } from '@/components/course/moduleGstHst';
import { incomeTax } from '@/components/course/moduleIncomeTax';
import { auditing } from '@/components/course/moduleAuditing';
import { ethics } from '@/components/course/moduleEthics';
import { analysis } from '@/components/course/moduleAnalysis';
import { software } from '@/components/course/moduleSoftware';
import { reporting } from '@/components/course/moduleReporting';
import { publicSector } from '@/components/course/modulePublicSector';
import { taxPlanning } from '@/components/course/moduleTaxPlanning';
import { forensics } from '@/components/course/moduleForensics';
// Modules marked track:'advanced' are listed under their own heading, after the core program.
export const modules = [fundamentals, doubleEntry, cycle, statements, financial, managerial, gstHst, incomeTax, auditing, ethics, analysis, software, reporting, publicSector, taxPlanning, forensics];
export const writtenModules = modules.filter(m => m.lessons);
export const courseLessons = writtenModules.flatMap(m => m.lessons.map(l => ({ ...l, moduleId: m.id })));
export const getModule = id => writtenModules.find(m => m.id === id);
export const findLesson = id => {
  for (const module of writtenModules) {
    const i = module.lessons.findIndex(l => l.id === id);
    if (i < 0) continue;
    const following = module.lessons[i + 1];
    const next = following ? { to: `/course/lesson?id=${following.id}`, label: `Next: ${following.title}` } : { to: `/course/quiz?module=${module.id}`, label: 'Take the module quiz' };
    return { lesson: module.lessons[i], module, position: i + 1, next };
  }
  return null;
};