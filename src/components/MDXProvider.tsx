import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import {
  AIUseCasesTable,
  AIReadinessTable,
  DataSecurityTable,
  EthicalConsiderationsTable,
  FDARegulatoryTable,
  KPIsTable,
  DataQualityMetricsTable,
  DataLifecycleTable,
  RegulatoryComplianceTable,
  DataGovernanceRolesTable,
  BiasMitigationTable,
  ChallengesTable,
  JobTitlesTable
} from './AIComponentDummies';

// Update components object with imported dummy components
const components = {
  AIUseCasesTable,
  AIReadinessTable,
  DataSecurityTable,
  EthicalConsiderationsTable,
  FDARegulatoryTable,
  KPIsTable,
  DataQualityMetricsTable,
  DataLifecycleTable,
  RegulatoryComplianceTable,
  DataGovernanceRolesTable,
  BiasMitigationTable,
  ChallengesTable,
  JobTitlesTable
};

export function CustomMDXProvider({ children }: { children: React.ReactNode }) {
  return <MDXProvider components={components}>{children}</MDXProvider>;
} 