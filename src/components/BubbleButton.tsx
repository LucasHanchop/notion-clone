import { ComponentProps, ReactNode } from 'react'


interface Props extends ComponentProps<'button'> {
    children: ReactNode
}

const BubbleButton = (props: Props) => {
  return (
    <button className="p-2 text-zinc-200 text-sm flex items-center gap-1.5 font-medium leading-none hover:text-zinc-50 hover:bg-zinc-600 data-[active=true]:text-violet-400 "
        {...props}
    />
  )
}

export default BubbleButton
