<template>
  <div class="privacy-policy-container">
  <h1>Privacy Policy</h1>
  <p><strong>Effective Date:</strong> [06/09/2024]</p>

  <h2>Introduction</h2>
  <p>
    We respect your privacy and are committed to protecting the personal information you provide when using our website. This policy explains how we collect, use, protect, and disclose your information.
  </p>

  <h2>Information We Collect</h2>
  <ul>
    <li><strong>Personal Information:</strong> User name, email address, user avatar.</li>
    <li><strong>Order Information:</strong> Products you order, contact details.</li>
    <li><strong>Automatically Collected Information:</strong>  browser type, access time.</li>
  </ul>

  <h2>How We Use Your Information</h2>
  <p>We use your information to:</p>
  <ul>
    <li>Process your orders and arrange delivery.</li>
    <li>Improve our services.</li>
    <li>Contact you regarding orders and support.</li>
  </ul>

  <h2>Disclosure to Third Parties</h2>
  <p>
    We may share your information with delivery providers and payment systems to fulfill your orders.
  </p>

  <h2>Use of Third-Party Services</h2>
  <p>
    Registration on our site may be done through GitHub, Google, or Discord. Their privacy policies are available at:
  </p>
  <ul>
    <li><a href="https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement" target="_blank">
      <h4>GitHub Privacy Policy</h4>
    </a></li>
    <li><a href="https://policies.google.com/privacy" target="_blank">
      <h4>Google Privacy Policy</h4>
    </a></li>
    <li><a href="https://discord.com/privacy" target="_blank">
      <h4>Discord Privacy Policy</h4>
    </a></li>
  </ul>

  <h2>Data Protection</h2>
  <p>
    We take measures to protect your information, but data transmission over the internet always carries some risks.
  </p>

  <h2>Your Rights</h2>
  <p>You have the right to access, correct, or delete your data. Contact us at [ mulusk2005@gmail.com ] for more information.</p>

  <h2>Contact Us</h2>
  <p>
    For any privacy-related questions, please email us at [ mulusk2005@gmail.com ].
  </p>

  <h2>Updates</h2>
  <p>
    We may update this policy from time to time. Please check this page for information about any changes.
  </p>
</div>
</template>

<script>
  export default {
    name: 'PrivecyPolicy'
  }
</script>

<style scoped>
  .privacy-policy-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    line-height: 1.6;
    font-family: Arial, sans-serif;
    color: #333;
  }

  h1, h2 {
    color: #333;
  }

  p, ul, li {
    font-size: 16px;
    margin-bottom: 1rem;
  }

  h4 {
    position: relative;
    overflow: hidden;
    width: max-content;
  }

  h4::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color: black;
  }
</style>