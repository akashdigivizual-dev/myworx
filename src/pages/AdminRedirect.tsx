import React, { useEffect } from 'react';

const AdminRedirect: React.FC = () => {
  useEffect(() => {
    // Redirect to Strapi admin panel
    const cmsUrl = import.meta.env.VITE_CMS_URL || 'http://localhost:1337';
    window.location.href = `${cmsUrl}/admin`;
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="text-center">
        <div className="mb-6">
          <div className="inline-block">
            <div className="w-12 h-12 border-4 border-brand-orange border-t-transparent rounded-full animate-spin"></div>
          </div>
        </div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Admin Portal</h1>
        <p className="text-gray-600">Redirecting to admin panel...</p>
        <p className="text-sm text-gray-400 mt-4">If not redirected, <a href="#" onClick={(e) => {
          e.preventDefault();
          const cmsUrl = import.meta.env.VITE_CMS_URL || 'http://localhost:1337';
          window.location.href = `${cmsUrl}/admin`;
        }} className="text-brand-orange hover:underline">click here</a></p>
      </div>
    </div>
  );
};

export default AdminRedirect;
