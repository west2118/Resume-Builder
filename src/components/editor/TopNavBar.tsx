import { ArrowLeft, Download, Eye, Layout, Save } from "lucide-react";
const TopNavBar = ({
  setShowMobilePreview,
  showMobilePreview,
  handleDownloadPDF,
  handleSave,
}: {
  setShowMobilePreview: any;
  showMobilePreview: any;
  handleDownloadPDF: any;
  handleSave: any;
}) => {
  return (
    <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
      <div className="px-4 sm:px-6 lg:px-8 py-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <a
              href="/templates"
              className="flex items-center text-gray-600 hover:text-gray-900 transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </a>
            <h1 className="text-xl font-semibold text-gray-800">
              Resume Editor
            </h1>
          </div>

          <div className="flex items-center space-x-3">
            {/* Mobile Preview Toggle */}
            <button
              onClick={() => setShowMobilePreview(!showMobilePreview)}
              className="lg:hidden flex items-center px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
              <Eye className="w-5 h-5 mr-2" />
              <span>{showMobilePreview ? "Show Form" : "Show Preview"}</span>
            </button>

            {/* Action Buttons */}
            <button
              onClick={handleSave}
              className="flex items-center px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
              <Save className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">Save</span>
            </button>

            <button
              onClick={handleDownloadPDF}
              className="flex items-center px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
              <Download className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">Download PDF</span>
            </button>

            <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              <Layout className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">Change Template</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavBar;
