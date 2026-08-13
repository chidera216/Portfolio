const Button = ({ text, className = "", onClick, href, download }) => {
  const handleDownload = async () => {
    try {
      const response = await fetch(href);

      if (!response.ok) {
        throw new Error("Failed to download resume");
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.download = download || "download";
      document.body.appendChild(link);
      link.click();

      link.remove();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Download failed:", error);
    }
  };
  return (
    <div>
      <button
        onClick={href ? handleDownload : onClick}
        href={href}
        download={download}
        className={`px-5 py-2.5 ${className}`}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
