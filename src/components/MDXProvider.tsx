import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import AIUseCasesTable from './AIUseCasesTable';
import AIReadinessTable from './AIReadinessTable';
import DataSecurityTable from './DataSecurityTable';
import EthicalConsiderationsTable from './EthicalConsiderationsTable';
import FDARegulatoryTable from './FDARegulatoryTable';
import KPIsTable from './KPIsTable';
import DataQualityMetricsTable from './DataQualityMetricsTable';
import DataLifecycleTable from './DataLifecycleTable';
import RegulatoryComplianceTable from './RegulatoryComplianceTable';
import DataGovernanceRolesTable from './DataGovernanceRolesTable';
import BiasMitigationTable from './BiasMitigationTable';

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
};

export function CustomMDXProvider({ children }: { children: React.ReactNode }) {
  return <MDXProvider components={components}>{children}</MDXProvider>;
} 