/* ════════════════════════════════════════════════════════════
   SEARCH.JS — Client-side search filtering
   ══════════════════════════════════════════════════════════ */

(function() {
  'use strict';

  // Placeholder data structure for scriptural content
  const searchableContent = [
    {
      title: 'Rigveda',
      category: 'Scripture',
      tags: ['vedas', 'rigveda', 'hymns'],
      url: '/pages/scripture.html#rigveda'
    },
    {
      title: 'Samaveda',
      category: 'Scripture',
      tags: ['vedas', 'samaveda', 'music'],
      url: '/pages/scripture.html#samaveda'
    },
    {
      title: 'Yajurveda',
      category: 'Scripture',
      tags: ['vedas', 'yajurveda', 'rituals'],
      url: '/pages/scripture.html#yajurveda'
    },
    {
      title: 'Atharvaveda',
      category: 'Scripture',
      tags: ['vedas', 'atharvaveda', 'mantras'],
      url: '/pages/scripture.html#atharvaveda'
    },
    {
      title: 'Bhagavad Gita',
      category: 'Scripture',
      tags: ['gita', 'philosophy', 'dharma'],
      url: '/pages/scripture.html#gita'
    },
    {
      title: 'Upanishads',
      category: 'Scripture',
      tags: ['upanishads', 'philosophy', 'vedanta'],
      url: '/pages/scripture.html#upanishads'
    },
    {
      title: 'Sandhi Rules',
      category: 'Grammar',
      tags: ['sandhi', 'grammar', 'linguistics', 'coalescence'],
      url: '/pages/grammar.html#sandhi'
    },
    {
      title: 'Vibhakti',
      category: 'Grammar',
      tags: ['vibhakti', 'cases', 'grammar'],
      url: '/pages/grammar.html#vibhakti'
    },
    {
      title: 'Dhatu Roots',
      category: 'Grammar',
      tags: ['dhatu', 'roots', 'verbs', 'conjugation'],
      url: '/pages/grammar.html#dhatu'
    },
    {
      title: 'Ashtadhyayi',
      category: 'Grammar',
      tags: ['panini', 'ashtadhyayi', 'rules', 'sutras'],
      url: '/pages/grammar.html#ashtadhyayi'
    },
    {
      title: 'Sanskrit Heritage',
      category: 'Heritage',
      tags: ['heritage', 'history', 'culture'],
      url: '/pages/heritage.html'
    },
    {
      title: 'Vedic Manuscripts',
      category: 'Heritage',
      tags: ['manuscripts', 'preservation', 'palm-leaf'],
      url: '/pages/heritage.html#manuscripts'
    },
    {
      title: 'Temple Inscriptions',
      category: 'Heritage',
      tags: ['inscriptions', 'temples', 'archaeology'],
      url: '/pages/heritage.html#inscriptions'
    },
    {
      title: 'Performing Arts',
      category: 'Heritage',
      tags: ['kathak', 'arts', 'culture', 'traditions'],
      url: '/pages/heritage.html#arts'
    }
  ];

  // Search function
  function searchContent(query) {
    if (!query || query.trim().length === 0) {
      return [];
    }

    const lowerQuery = query.toLowerCase().trim();

    return searchableContent.filter(item => {
      const titleMatch = item.title.toLowerCase().includes(lowerQuery);
      const categoryMatch = item.category.toLowerCase().includes(lowerQuery);
      const tagsMatch = item.tags.some(tag => tag.includes(lowerQuery));

      return titleMatch || categoryMatch || tagsMatch;
    });
  }

  // Initialize search bar if it exists
  const searchInput = document.querySelector('.search-bar input');
  const searchButton = document.querySelector('.search-bar button');

  if (searchInput && searchButton) {
    searchButton.addEventListener('click', function() {
      const query = searchInput.value;
      performSearch(query);
    });

    searchInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        performSearch(this.value);
      }
    });
  }

  // Search tag clicks
  const searchTags = document.querySelectorAll('.search-tag');
  searchTags.forEach(tag => {
    tag.addEventListener('click', function() {
      const tagText = this.textContent.trim();
      if (searchInput) {
        searchInput.value = tagText;
        performSearch(tagText);
      }
    });
  });

  // Perform search and navigate or show results
  function performSearch(query) {
    const results = searchContent(query);

    if (results.length === 0) {
      alert('No results found for "' + query + '"');
      return;
    }

    // For MVP, redirect to first result or search results page
    if (results.length === 1) {
      window.location.href = results[0].url;
    } else {
      // Store results in sessionStorage and go to search results page
      sessionStorage.setItem('searchResults', JSON.stringify(results));
      sessionStorage.setItem('searchQuery', query);
      window.location.href = '/pages/search-results.html';
    }
  }

  // Export for external use
  window.SanskritSearch = {
    search: searchContent,
    performSearch: performSearch,
    data: searchableContent
  };
})();
