import { getLayout } from "../../components/AccountSettingsLayout";

const AccountSettingsProfile = () => (
  <div>
    <div className="pt-6 pb-8 sm:pt-8">
      <p className="text-sm text-gray-700">
        Set your your profile information here for others on the site to view.
      </p>
      <div className="mt-6">
        <div className="max-w-4xl mx-auto">
          <label className="block">
            <span className="block font-medium text-sm text-gray-900 leading-tight">
              Display name
            </span>
            <div className="mt-2">
              <input
                type="email"
                className="input input-bordered input-warning w-full"
                placeholder="John Doe"
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

AccountSettingsProfile.getLayout = getLayout;

export default AccountSettingsProfile;
