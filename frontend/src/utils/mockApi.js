// Mock API for contact form submission
// This will be replaced with actual backend integration

export const submitContactForm = async (formData) => {
  // Simulate API call
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Mock form submission:', formData);
      resolve({ success: true });
    }, 1000);
  });
};