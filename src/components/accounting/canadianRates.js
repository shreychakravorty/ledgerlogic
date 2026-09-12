// Canadian payroll and tax figures used anywhere in the app.
//
// These change every January. Lessons deliberately teach the *structure* (the employer matches
// CPP dollar for dollar, employer EI is 1.4× the employee premium, CCA runs on class pools) and
// treat the numbers as illustration, because a stale figure quoted to an accountant is worse than
// no figure at all. Anything numeric therefore lives here, with a year, a source and a review
// date, rather than being scattered through lesson copy as a constant.
//
// To update: check each figure against the CRA page listed below, then bump `taxYear`,
// `verifiedOn` and `reviewBy` together. `ratesAreStale()` surfaces a warning in the UI when the
// review date passes, so an out-of-date table announces itself instead of quietly misleading.

export const taxYear = 2026;
export const verifiedOn = '2026-09-12';
export const reviewBy = '2027-01-31'; // CRA publishes the new year's figures each November/December.

export const payrollRates = [
  {
    label: 'CPP contribution rate',
    value: '5.95%',
    detail: 'Employee and employer each. The employer matches the employee dollar for dollar.',
    source: 'https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/payroll/payroll-deductions-contributions/canada-pension-plan-cpp/cpp-contribution-rates-maximums-exemptions.html'
  },
  {
    label: 'CPP earnings range',
    value: '$3,500 – $74,600',
    detail: 'Basic exemption to the year’s maximum pensionable earnings (YMPE).',
    source: 'https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/payroll/payroll-deductions-contributions/canada-pension-plan-cpp/cpp-contribution-rates-maximums-exemptions.html'
  },
  {
    label: 'CPP2 rate',
    value: '4%',
    detail: 'A second contribution on earnings from $74,600 to $85,000 (YAMPE), employee and employer each. Introduced in 2024.',
    source: 'https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/payroll/calculating-deductions/making-deductions/second-additional-cpp-contribution-rates-maximums.html'
  },
  {
    label: 'EI premium rate',
    value: '1.63% employee',
    detail: 'The employer pays 1.4× the employee premium — about 2.28%. This multiple is structural, not annual.',
    source: 'https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/payroll/payroll-deductions-contributions/employment-insurance-ei/ei-premium-rates-maximums.html'
  },
  {
    label: 'EI maximum insurable earnings',
    value: '$68,900',
    detail: 'Premiums stop once an employee reaches this for the year.',
    source: 'https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/payroll/payroll-deductions-contributions/employment-insurance-ei/ei-premium-rates-maximums.html'
  }
];

// Rules that move with legislation rather than with an annual indexation, where quoting a
// specific figure would be actively misleading.
export const movingRules = [
  {
    label: 'First-year CCA',
    detail: 'The half-year rule, the accelerated investment incentive and immediate expensing have all applied at different times and are phasing at different rates. Check the rules in force for the year being filed rather than carrying last year’s treatment forward.'
  },
  {
    label: 'HST quick method rates',
    detail: 'The prescribed remittance rate depends on the province of the supply and whether the business is a service provider or a reseller, and eligibility has a revenue threshold. There is no single rate to memorise.'
  },
  {
    label: 'Provincial sales tax',
    detail: 'HST, GST-plus-PST and QST behave differently on registration, input recovery and filing. Place of supply decides which applies.'
  }
];

export const ratesAreStale = (today = new Date()) => today.toISOString().slice(0, 10) > reviewBy;
