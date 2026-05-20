(async function() {
  'use strict';

  const root = document.getElementById('india-institutions-root');
  if (!root) {
    return;
  }

  function createCard(title, content) {
    return `
      <article class="data-card">
        <h3>${title}</h3>
        ${content}
      </article>
    `;
  }

  function formatList(items) {
    if (!items || items.length === 0) {
      return '<p><em>No data available.</em></p>';
    }
    return `<ul>${items.map(item => `<li>${item}</li>`).join('')}</ul>`;
  }

  function createInstitutionCard(item) {
    return createCard(item.university_name || item.department_name, `
      <p><strong>${item.type_of_institution || item.department_name || ''}</strong></p>
      <p><strong>State / Country:</strong> ${item.state || item.country || 'N/A'}</p>
      <p><strong>Established:</strong> ${item.founding_year || 'N/A'}</p>
      <p><strong>Specializations:</strong> ${item.specialization_areas ? item.specialization_areas.join(', ') : 'N/A'}</p>
      <p><strong>Programs:</strong> ${item.programs_offered ? item.programs_offered.join(', ') : item.courses_and_programs ? item.courses_and_programs.join(', ') : 'N/A'}</p>
      ${item.official_website ? `<p><a href="${item.official_website}" target="_blank" rel="noreferrer">Official website</a></p>` : ''}
    `);
  }

  try {
    const data = await DataLoader.fetchJSON('../data/indian_institutes.json');
    const universities = data.section_a_sanskrit_universities.universities || [];
    const departments = data.section_b_sanskrit_departments.departments || [];

    const universityCards = universities.map(institution => createInstitutionCard(institution)).join('');
    const departmentCards = departments.map(department => createCard(department.department_name, `
      <p><strong>University:</strong> ${department.university_name}</p>
      <p><strong>Faculty:</strong> ${department.faculty_specialization ? department.faculty_specialization.join(', ') : 'N/A'}</p>
      <p><strong>Courses:</strong> ${department.courses_and_programs ? department.courses_and_programs.join(', ') : 'N/A'}</p>
      ${department.official_link ? `<p><a href="${department.official_link}" target="_blank" rel="noreferrer">Department portal</a></p>` : ''}
    `)).join('');

    root.innerHTML = `
      <section class="data-section">
        <div class="section-header">
          <span class="section-eyebrow">Indian Universities</span>
          <h2 class="section-title">Sanskrit Universities & Specialised Campuses</h2>
          <p>${data.section_a_sanskrit_universities.description}</p>
        </div>
        <div id="institution-map" class="map-frame"></div>
        <div class="data-grid">${universityCards}</div>
      </section>
      <section class="data-section">
        <div class="section-header">
          <span class="section-eyebrow">University Departments</span>
          <h2 class="section-title">Sanskrit Departments within General Universities</h2>
          <p>${data.section_b_sanskrit_departments.description}</p>
        </div>
        <div class="data-grid">${departmentCards}</div>
      </section>
    `;

    const markers = [];
    universities.forEach(item => {
      if (item.lat && item.lng) {
        markers.push({
          lat: item.lat,
          lng: item.lng,
          label: item.university_name,
          subtitle: item.state,
          link: item.official_website
        });
      }
    });

    departments.forEach(item => {
      if (item.lat && item.lng) {
        markers.push({
          lat: item.lat,
          lng: item.lng,
          label: item.department_name,
          subtitle: item.university_name,
          link: item.official_link
        });
      }
    });

    if (window.InstitutionMap && typeof window.InstitutionMap.initialize === 'function') {
      window.InstitutionMap.initialize('institution-map', markers);
    }
  } catch (error) {
    console.error('Indian institutions render error:', error);
    root.innerHTML = '<p class="data-error">Unable to load Indian Institutions data.</p>';
  }
})();
