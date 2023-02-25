import { geyDays } from '~/assets/db/days';
import AmountBar from '~/components/AmountBar';

export default function Home() {
  const daysData = createRouteData(geyDays);
  const maxAmount = createMemo(() => (
    daysData()?.reduce((acc, { amount }) => amount > acc ? amount : acc, 0) || 0
  ));

  return (
    <main class="font-sans grid place-items-center min-h-screen text-c-brown">
      <article class="space-y-6 max-w-95vw sm:w-120">
        <header class="grid-(~ cols-2) rounded-xl bg-c-orange text-white p-6 gap-2">
          <p>My balance</p>
          <img src="/icons/logo.svg" alt="logo" class="row-span-2 place-self-[center_end]" />
          <p class="text-3xl">$921.48</p>
        </header>
        <div class="bg-[#FFFCF7] rounded-xl p-6">
          <div class="pb-6">
            <h2 class="text-3xl font-bold">Spending - Last 7 days</h2>
            <ul class="flex justify-between h-40 mt-12 gap-1">
              <For each={daysData()}>
                {(data) => <AmountBar {...data} maxAmount={maxAmount()} />}
              </For>
            </ul>
          </div>
          <footer class="border-t-1 grid-(~ cols-2) gap-1 pt-6">
            <p class="col-span-2 text-c-dust">Total this month</p>
            <p class="row-span-2 text-4xl font-bold">$478.33</p>
            <p class="text-end font-bold">+2.4%</p>
            <p class="text-end text-c-dust">from last month</p>
          </footer>
        </div>
      </article>
    </main>
  );
}
