import { AuthGuard } from "./../guard/auth.guard";
import { Routes } from "@angular/router";

export const CommonLayout_ROUTES: Routes = [
  {
    path: "dashboard",
    loadChildren: () =>
      import("../../dashboard/dashboard.module").then(m => m.DashboardModule),
    canActivate: [AuthGuard]
  },
  {
    path: "user-management",
    loadChildren: () =>
      import("../../user-management/user-management.module").then(
        m => m.UserManagementModule
      ),
    canActivate: [AuthGuard]
  },
  {
    path: "setup",
    loadChildren: () =>
      import("../../setups/setups.module").then(m => m.SetupsModule),
    canActivate: [AuthGuard]
  },
  {
    path: "facility-management",
    loadChildren: () =>
      import("../../facility-management/facility-management.module").then(
        m => m.FacilityManagementModule
      ),
    canActivate: [AuthGuard]
  }
];
