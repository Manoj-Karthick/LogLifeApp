<template>
  <div class="mb-2">
    <div class="flex h-12 max-h-12 items-center border-b px-6 border-default">
      <h4 class="mb-0 text-lg truncate" title="Dashboard">Dashboard</h4>
    </div>
  </div>
  <div class="-mt-1">
    <nav
      role="menu"
      aria-label="Sidebar"
      aria-orientation="vertical"
      aria-labelledby="options-menu"
    >
      <ul>
        <div class="border-b py-5 px-6 border-default">
          <ul class="space-y-1">
            <NuxtLink
              class="flex items-center space-x-2"
              target="_self"
              to="/dashboard"
            >
              <PanelsTopLeft :stroke-width="1.5" class="h-5 w-5" />
              <span
                class="w-full truncate text-sm text-foreground-light transition group-hover:text-foreground"
              >
                Dashboard
              </span>
            </NuxtLink>
          </ul>
        </div>
        <div class="border-b py-5 px-6 border-default">
          <div class="flex space-x-3 mb-4 font-normal">
            <span class="text-sm text-gray-700 w-full">Trackers</span>
          </div>
          <ul class="space-y-4">
            <NuxtLink
              class="flex items-center space-x-2"
              target="_self"
              to="/finance"
            >
              <Wallet :stroke-width="1.5" class="w-5 h-5" />
              <span
                class="w-full truncate text-sm text-foreground-light transition group-hover:text-foreground"
              >
                Finance
              </span>
            </NuxtLink>
            <NuxtLink
              class="flex items-center space-x-2"
              target="_self"
              to="/habit"
            >
              <RefreshCcw :stroke-width="1.5" class="w-5 h-5" />
              <span
                class="w-full truncate text-sm text-foreground-light transition group-hover:text-foreground"
              >
                Habit
              </span>
            </NuxtLink>
            <NuxtLink
              class="flex items-center space-x-2"
              target="_self"
              to="/expiry"
            >
              <CalendarDays :stroke-width="1.5" class="w-5 h-5" />
              <span
                class="w-full truncate text-sm text-foreground-light transition group-hover:text-foreground"
              >
                Expiry
              </span>
            </NuxtLink>
            <NuxtLink
              class="flex items-center space-x-2"
              target="_self"
              to="/todo"
            >
              <CircleCheck :stroke-width="1.5" class="w-5 h-5" />
              <span
                class="w-full truncate text-sm text-foreground-light transition group-hover:text-foreground"
              >
                Todo
              </span>
            </NuxtLink>
          </ul>
        </div>
        <div class="border-b py-5 px-6 border-default">
          <ul class="space-y-4">
            <NuxtLink
              class="flex items-center space-x-2"
              target="_self"
              to="/account"
            >
              <CircleUserRound :stroke-width="1.5" class="w-5 h-5" />
              <span
                class="w-full truncate text-sm text-foreground-light transition group-hover:text-foreground"
              >
                Account
              </span>
            </NuxtLink>
            <NuxtLink
              class="flex items-center space-x-2"
              target="_self"
              to="/settings"
            >
              <Settings :stroke-width="1.5" class="w-5 h-5" />
              <span
                class="w-full truncate text-sm text-foreground-light transition group-hover:text-foreground"
              >
                Settings
              </span>
            </NuxtLink>
          </ul>
        </div>
        <div class="border-b py-5 px-6 border-default">
          <ul class="space-y-1">
            <li
              role="menuitem"
              class="cursor-pointer flex space-x-3 items-center outline-none focus-visible:ring-1 ring-foreground-muted focus-visible:z-10 group py-1 font-normal border-default group-hover:border-foreground-muted"
              style="margin-left: 0rem"
            >
              <button
                class="flex items-center space-x-2 transition text-sm text-foreground-lighter group-hover:text-foreground-light min-w-fit"
                @click="signOut"
              >
                <LogOut :stroke-width="1.5" class="h-5 w-5" />
                <span
                  class="transition truncate text-sm w-full text-foreground-light group-hover:text-foreground"
                  >Log out</span
                >
              </button>
            </li>
          </ul>
        </div>
      </ul>
    </nav>
  </div>
</template>

<script setup>
import {
  LogOut,
  CircleCheck,
  Wallet,
  RefreshCcw,
  CalendarDays,
  PanelsTopLeft,
  CircleUserRound,
  Settings,
} from "lucide-vue-next";
const supabase = useSupabaseClient();

const loading = ref(true);
const username = ref("");
const website = ref("");
const avatar_path = ref("");

loading.value = true;
const user = useSupabaseUser();
const { data } = await supabase
  .from("profiles")
  .select(`username, website, avatar_url`)
  .eq("id", user.value.id)
  .single();

if (data) {
  username.value = data.username;
  website.value = data.website;
  avatar_path.value = data.avatar_url;
}

loading.value = false;

async function signOut() {
  try {
    debugger;
    console.log("inside signout");
    loading.value = true;
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
    user.value = null;
    navigateTo("/login");
  } catch (error) {
    console.log(error);
  } finally {
    loading.value = false;
  }
}
</script>
