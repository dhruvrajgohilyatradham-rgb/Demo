
// FAQ toggle
    function toggleFaq(el) {
      const answer = el.nextElementSibling;
      const icon = el.querySelector('i.fa-chevron-down');
      if (answer.classList.contains('show')) {
        answer.classList.remove('show');
        icon.style.transform = 'rotate(0deg)';
      } else {
        document.querySelectorAll('.faq-answer').forEach(a => a.classList.remove('show'));
        document.querySelectorAll('.faq-question i.fa-chevron-down').forEach(i => i.style.transform = 'rotate(0deg)');
        answer.classList.add('show');
        icon.style.transform = 'rotate(180deg)';
      }
    }

    // Back to top
    window.addEventListener('scroll', function() {
      const btn = document.getElementById('backTopBtn');
      if (window.scrollY > 400) btn.classList.add('show');
      else btn.classList.remove('show');
    });

    // Smooth highlight for nav links
    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if (targetId && targetId.startsWith('#')) {
          e.preventDefault();
          const target = document.querySelector(targetId);
          if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      });
    });// FAQ toggle
    function toggleFaq(el) {
      const answer = el.nextElementSibling;
      const icon = el.querySelector('i.fa-chevron-down');
      if (answer.classList.contains('show')) {
        answer.classList.remove('show');
        icon.style.transform = 'rotate(0deg)';
      } else {
        document.querySelectorAll('.faq-answer').forEach(a => a.classList.remove('show'));
        document.querySelectorAll('.faq-question i.fa-chevron-down').forEach(i => i.style.transform = 'rotate(0deg)');
        answer.classList.add('show');
        icon.style.transform = 'rotate(180deg)';
      }
    }

    // Back to top
    window.addEventListener('scroll', function() {
      const btn = document.getElementById('backTopBtn');
      if (window.scrollY > 400) btn.classList.add('show');
      else btn.classList.remove('show');
    });

    // Smooth highlight for nav links
    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if (targetId && targetId.startsWith('#')) {
          e.preventDefault();
          const target = document.querySelector(targetId);
          if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      });
    });// FAQ toggle
    function toggleFaq(el) {
      const answer = el.nextElementSibling;
      const icon = el.querySelector('i.fa-chevron-down');
      if (answer.classList.contains('show')) {
        answer.classList.remove('show');
        icon.style.transform = 'rotate(0deg)';
      } else {
        document.querySelectorAll('.faq-answer').forEach(a => a.classList.remove('show'));
        document.querySelectorAll('.faq-question i.fa-chevron-down').forEach(i => i.style.transform = 'rotate(0deg)');
        answer.classList.add('show');
        icon.style.transform = 'rotate(180deg)';
      }
    }

    // Back to top
    window.addEventListener('scroll', function() {
      const btn = document.getElementById('backTopBtn');
      if (window.scrollY > 400) btn.classList.add('show');
      else btn.classList.remove('show');
    });

    // Smooth highlight for nav links
    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if (targetId && targetId.startsWith('#')) {
          e.preventDefault();
          const target = document.querySelector(targetId);
          if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      });
    });
