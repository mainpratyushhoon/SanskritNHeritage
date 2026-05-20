(async function() {
  'use strict';

  const root = document.getElementById('methodology-root');
  if (!root) {
    return;
  }

  function makeList(items) {
    if (!items || !items.length) {
      return '<p><em>No details available.</em></p>';
    }
    return `<ul>${items.map(item => `<li>${item}</li>`).join('')}</ul>`;
  }

  try {
    const data = await DataLoader.fetchJSON('../data/methodology.json');
    const sections = data.sections || {};

    root.innerHTML = `
      <section class="data-section">
        <div class="section-header">
          <span class="section-eyebrow">Research Objective</span>
          <h2 class="section-title">Purpose & Scope</h2>
        </div>
        <p>${sections['1_research_objective'] ? sections['1_research_objective'].summary : ''}</p>
      </section>
      <section class="data-section">
        <div class="section-header">
          <span class="section-eyebrow">Research Workflow</span>
          <h2 class="section-title">Development Process</h2>
        </div>
        ${makeList(sections['2_research_workflow'])}
      </section>
      <section class="data-section">
        <div class="section-header">
          <span class="section-eyebrow">Source Types</span>
          <h2 class="section-title">Verification & Source Selection</h2>
        </div>
        ${makeList(sections['3_source_types_used'])}
      </section>
      <section class="data-section">
        <div class="section-header">
          <span class="section-eyebrow">Data Verification</span>
          <h2 class="section-title">Quality Control</h2>
        </div>
        <p><strong>${sections['4_data_verification_method'] ? sections['4_data_verification_method'].primary_approach : ''}</strong></p>
        <p><strong>Triangulation:</strong> ${sections['4_data_verification_method'] ? sections['4_data_verification_method'].triangulation_protocol : ''}</p>
        <p><strong>Currency check:</strong> ${sections['4_data_verification_method'] ? sections['4_data_verification_method'].currency_check : ''}</p>
      </section>
      <section class="data-section">
        <div class="section-header">
          <span class="section-eyebrow">Content Organization</span>
          <h2 class="section-title">Presentation Strategy</h2>
        </div>
        <p>${sections['5_content_organization_method'] ? sections['5_content_organization_method'].structural_rationale : ''}</p>
        <p>${sections['5_content_organization_method'] ? sections['5_content_organization_method'].ui_presentation_strategy : ''}</p>
      </section>
      <section class="data-section">
        <div class="section-header">
          <span class="section-eyebrow">Deliverables</span>
          <h2 class="section-title">What this portal includes</h2>
        </div>
        ${makeList(sections['6_output_deliverables'])}
      </section>
    `;
  } catch (error) {
    console.error('Methodology render error:', error);
    root.innerHTML = '<p class="data-error">Unable to load Methodology data.</p>';
  }
})();
