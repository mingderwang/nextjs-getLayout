import Link from "next/link";
import { getLayout } from "../components/SiteLayout";

const Index = () => (
  <div className="flex-container">
    <h1 className="text-center">
      <span className="block text-xl text-gray-600 leading-tight">
        Welcome to this
      </span>
      <span className="block text-5xl font-bold leading-none">
        Awesome Website
      </span>
    </h1>
    <div className="mt-12 text-center">
      <Link href="/account-settings/basic-information">
        <a className="btn">View account settings</a>
      </Link>
    </div>
  </div>
);

Index.getLayout = getLayout;

export default Index;
