import { createRef, forwardRef } from "react";
export interface CheckboxProps {
  name: string;
  label: string;
  value: string;
  onClick?: () => void;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>((props, ref = createRef()) => {
  const {
    name,
    label,
    value,
    ...inputProps
  } = props;
  const id = `checkbox:${name}:${value}`;
  return (
  <div className={`
          flex
          items-center 
          h-[30px] 
          w-[fit-content]
          pl-[12px] pr-[12px] 
          bg-[rgb(255_255_255_/_10%)]
          rounded-[4px]
          relative`
  }>
     <input
       type="checkbox"
       className={`
        h-0 w-0 opacity-0
        peer
        `}
       id={id}
       value={value}
       ref={ref}
       name={name}
       {...inputProps}
      />
     <label
      htmlFor={id}
      className={`
        font-sans
        text-[12px]
        font-semibold
        text-white
        ml-[24px]
        
        before:content-[""]
        before:h-[20px]
        before:w-[20px]
        before:border-[2px]
        before:border-[solid]
        before:border-[gray]
        before:absolute
        before:top-[5px]
        before:left-[10px]
        before:rounded-[4px]
        before:bg-[rgba(0,_0,_0,_0.5)]


        peer-checked:before:border-[rgb(101,79,249)]
        peer-checked:before:bg-[rgb(101,_79,_249)]

        peer-[:not(:checked):focus]:before:[box-shadow:0_0_0_2px_rgba(101,_79,_249)]

        after:content-[""]
        after:h-[20px]
        after:w-[20px]
        after:absolute
        after:top-[5px]
        after:left-[10px]
        after:bg-tick
        after:bg-no-repeat
        after:bg-center
        after:rounded-[4px]
        after:scale-0

        peer-checked:after:scale-100
        peer-checked:after:[transition:all_0.4s_cubic-bezier(0.55,_0.055,_0.675,_0.19)]

        `}
    >{label}</label>
    </div>);
});
