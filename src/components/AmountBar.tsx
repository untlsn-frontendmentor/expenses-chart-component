import type { Day } from '~/assets/db/days';

type AmountBarProps = Day & {
  maxAmount: number,
}

export default function AmountBar(props: AmountBarProps) {
  return (
    <li class="flex-(~ col) justify-end items-center">
      <div
        class={clsx('rounded text-transparent max-sm:max-w-8', props.maxAmount == props.amount ? 'bg-c-cyan' : 'bg-c-orange')}
        style={{
          height: props.maxAmount ? `${props.amount / props.maxAmount * 100}%` : '',
        }}
      >
        {props.amount}
      </div>
      <p class="text-(c-dust sm)">{props.day}</p>
    </li>
  );
}
