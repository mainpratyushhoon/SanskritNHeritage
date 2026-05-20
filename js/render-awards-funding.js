(async function() {
  'use strict';

  const root = document.getElementById('awards-funding-root');
  if (!root) {
    return;
  }

  function createCard(title, body) {
    return `
      <article class="data-card">
        <h3>${title}</h3>
        ${body}
      </article>
    `;
  }

  try {
    const data = await DataLoader.fetchJSON('../data/awards.json');
    const awards = data.section_a_honors_and_awards.awards || [];
    const funding = data.section_b_scholarships_and_funding.funding_opportunities || [];

    root.innerHTML = `
      <section class="data-section">
        <div class="section-header">
          <span class="section-eyebrow">Honors and Awards</span>
          <h2 class="section-title">${data.section_a_honors_and_awards.description}</h2>
        </div>
        <div class="data-grid">
          ${awards.map(item => createCard(item.award_name, `
            <p><strong>Body:</strong> ${item.awarding_body}</p>
            <p><strong>Category:</strong> ${item.category}</p>
            <p><strong>Eligibility:</strong> ${item.eligibility}</p>
            <p><strong>Frequency:</strong> ${item.frequency}</p>
            <p>${item.contribution_summary}</p>
            ${item.official_link ? `<p><a href="${item.official_link}" target="_blank" rel="noreferrer">Official website</a></p>` : ''}
          `)).join('')}
        </div>
      </section>
      <section class="data-section">
        <div class="section-header">
          <span class="section-eyebrow">Scholarships & Funding</span>
          <h2 class="section-title">${data.section_b_scholarships_and_funding.description}</h2>
        </div>
        <div class="data-grid">
          ${funding.map(item => createCard(item.scholarship_fellowship_name, `
            <p><strong>Provider:</strong> ${item.provider}</p>
            <p><strong>Level:</strong> ${item.level}</p>
            <p><strong>Deadline:</strong> ${item.deadline}</p>
            <p><strong>Amount:</strong> ${item.amount}</p>
            <p><strong>Duration:</strong> ${item.duration}</p>
            <p><strong>Eligibility:</strong> ${item.eligibility}</p>
            ${item.link ? `<p><a href="${item.link}" target="_blank" rel="noreferrer">More details</a></p>` : ''}
          `)).join('')}
        </div>
      </section>
    `;
  } catch (error) {
    console.error('Awards & funding render error:', error);
    root.innerHTML = '<p class="data-error">Unable to load Awards & Funding data.</p>';
  }
})();
