function handleIntersection(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-viewport");
  
        // Disconnect the observer for this target after it has animated
        observer.unobserve(entry.target);
      }
    });
  }
  
  // Set up the Intersection Observer
  const options = {
    threshold: 0.1, // Adjust this value as needed
  };
  
  const observer = new IntersectionObserver(handleIntersection, options);
  
  // Specify the elements to observe
  const animationHeader = document.querySelector(".animation-header");
  const imgAbout = document.querySelector(".img-about");
  const textsAbout = document.querySelector(".texts-about");
  const rowCourses = document.querySelector(".row-courses");
  const rowPricing = document.querySelector(".row-pricing-table");
  const rowPricing2 = document.querySelector(".row-pricing-table2");
  const rowPricing3 = document.querySelector(".row-pricing-table3");
  const rowTestimonial = document.querySelector(".row-testimonial");
  const rowNewsletter = document.querySelector(".row-animation-newsletter");
  
  observer.observe(animationHeader);
  observer.observe(imgAbout);
  observer.observe(textsAbout);
  observer.observe(rowCourses);
  observer.observe(rowPricing);
  observer.observe(rowPricing2);
  observer.observe(rowPricing3);
  observer.observe(rowTestimonial);
  observer.observe(rowNewsletter);

  