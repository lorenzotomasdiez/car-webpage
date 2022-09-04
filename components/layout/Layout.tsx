import { ReactNode } from "react";
import {DashboardLayout, CommonLayout} from "./";

type Props = {
  children      :ReactNode;
  variant?      :'main' | 'dashboard';
  title?        :string;
}

export default function Layout({variant = "main", children, title=""}:Props){
  if(variant === "dashboard") return <DashboardLayout>{children}</DashboardLayout>;
  return <CommonLayout title={title}>{children}</CommonLayout>
}