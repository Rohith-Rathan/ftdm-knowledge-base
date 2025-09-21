"use client"

import { DocumentationLayout } from '@/components/documentation-layout'
import { Introduction } from '@/components/docs/introduction'
import { FrameworkFlowVisualization } from '@/components/docs/framework-flow-visualization'
import { QuickStart } from '@/components/docs/quick-start'
import { StageOverview } from '@/components/docs/stage-overview'
import { FrameworkScenarios } from '@/components/docs/framework-scenarios'
import { AntiHallucinationSafeguards } from '@/components/docs/anti-hallucination-safeguards'
import { BenefitsOutcomes } from '@/components/docs/benefits-outcomes'

export default function Home() {
  return (
    <DocumentationLayout>
      <Introduction />
      <FrameworkFlowVisualization />
      <QuickStart />
      <StageOverview />
      <FrameworkScenarios />
      <AntiHallucinationSafeguards />
      <BenefitsOutcomes />
    </DocumentationLayout>
  )
}