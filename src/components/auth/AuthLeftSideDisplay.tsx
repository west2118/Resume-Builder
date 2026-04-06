import { FileText, Briefcase, Sparkles } from "lucide-react";

const AuthLeftSideDisplay = () => {
  return (
    <div className="hidden lg:block space-y-8">
      {/* Logo & Tagline */}
      <div>
        <h1 className="text-4xl font-bold text-gray-800 mb-3">
          Resume<span className="text-blue-600">Builder</span>
        </h1>
        <p className="text-xl text-gray-600">
          Create professional resumes that stand out
        </p>
      </div>

      {/* Feature List */}
      <div className="space-y-6">
        <div className="flex items-start space-x-4">
          <div className="shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
            <FileText className="w-5 h-5 text-blue-600" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">
              Professional Templates
            </h3>
            <p className="text-gray-600 text-sm">
              Choose from 50+ expertly designed templates
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="shrink-0 w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-purple-600" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">
              AI-Powered Suggestions
            </h3>
            <p className="text-gray-600 text-sm">
              Get smart recommendations for your content
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="shrink-0 w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
            <Briefcase className="w-5 h-5 text-green-600" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">ATS-Friendly</h3>
            <p className="text-gray-600 text-sm">
              Pass through applicant tracking systems with ease
            </p>
          </div>
        </div>
      </div>

      {/* Testimonial */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <div className="flex items-center space-x-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className="w-5 h-5 text-yellow-400 fill-current"
              viewBox="0 0 20 20">
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
            </svg>
          ))}
        </div>
        <p className="text-gray-600 italic">
          "This resume builder helped me land my dream job in just 2 weeks! The
          templates are beautiful and the interface is so easy to use."
        </p>
        <div className="mt-4 flex items-center">
          <div className="w-10 h-10 rounded-full bg-linear-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-semibold">
            SJ
          </div>
          <div className="ml-3">
            <p className="font-medium text-gray-800">Sarah Johnson</p>
            <p className="text-sm text-gray-500">
              Product Manager at Tech Corp
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLeftSideDisplay;
