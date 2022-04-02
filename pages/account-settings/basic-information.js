import { getLayout } from "../../components/AccountSettingsLayout";

const AccountSettingsBasicInformation = () => (
  <div>
    <div className="pt-6 pb-8 sm:pt-8">
      <p className="text-sm text-gray-700">
        Set your login preferences, help us personalize your experience and make
        big account changes here.
      </p>
      <div className="mt-6">
        <div className="max-w-4xl mx-auto">
          <label className="block">
            <span className="block font-medium text-sm text-gray-900 leading-tight">
              Email address
            </span>
            <div className="mt-2">
              <input
                type="email"
                className="input input-bordered input-warning w-full"
                placeholder="johndoe@example.com"
              />
            </div>
          </label>
          <label className="block mt-5">
            <span className="block font-medium text-sm text-gray-900 leading-tight">
              Country/region
            </span>
            <div className="mt-2">
              <input
                className="input input-bordered input-warning w-full"
                placeholder="Canada"
              />
            </div>
          </label>
          <label className="block mt-5">
            <span className="block font-medium text-sm text-gray-900 leading-tight">
              Language
            </span>
            <div className="mt-2">
              <input
                className="input input-bordered input-warning w-full"
                placeholder="English"
              />
            </div>
          </label>
        </div>
      </div>
    </div>
    <div className="border-t-2 border-gray-200 px-0 py-5 flex justify-end">
      <button type="button" className="btn btn-ghost">
        Cancel
      </button>
      <div className="px-2">
        <button type="button" className="btn btn-secondary">
          Save
        </button>
      </div>
    </div>
  </div>
);

AccountSettingsBasicInformation.getLayout = getLayout;

export default AccountSettingsBasicInformation;
