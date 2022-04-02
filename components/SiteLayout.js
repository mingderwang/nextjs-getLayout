import Link from "next/link";

const SiteLayout = ({ children }) => (
  <div className="bg-white antialiased">
    <div>
      <div>
        <div className="max-w-xl mx-auto px-8">
          <nav>
            <div className="py-4 flex-shrink-0 flex items-center">
              <img className="h-8 w-8" src="/logo.svg" alt="" />
              <Link href="/">
                <a className="ml-8 font-medium text-gray-900">Home</a>
              </Link>
              <Link href="/account-settings/basic-information">
                <a className="ml-8 font-medium text-gray-900">
                  Account Settings
                </a>
              </Link>
            </div>
            <div className="mt-2">
              <input
                type="text"
                placeholder="Search..."
                className="input input-bordered input-warning w-full"
              />
            </div>
          </nav>
        </div>
      </div>
    </div>
    <div className="mt-6 sm:mt-0 sm:py-12">{children}</div>
  </div>
);

export const getLayout = (page) => <SiteLayout>{page}</SiteLayout>;

export default SiteLayout;
