import Script from "next/script";

export default function Footer() {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <div className="container text-center">
        <p>&copy; {new Date().getFullYear()} My Company. All rights reserved.</p>
      </div>

      {/* Bootstrap 5 JS bundle */}
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/js/bootstrap.bundle.min.js"
        strategy="afterInteractive"
      />
    </footer>
  );
}
