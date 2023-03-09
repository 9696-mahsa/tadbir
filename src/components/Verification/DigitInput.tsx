import './DigitInput.css';
import { useMemo  } from 'react';
import { Input } from 'antd';


export const RE_DIGIT = new RegExp(/^\d+$/);

export type Props = {
  value: string;
  valueLength: number;
  onChange: (value: string) => void;
};

export default function DigitInput({ value, valueLength, onChange }: Props) {



  
      let valueItems = useMemo(() => {
        const valueArray = value.split('');
        const items: Array<string> = [];
    
        for (let i = 0; i < valueLength; i++) {
          const char = valueArray[i];
    
          if (RE_DIGIT.test(char)) {
            items.push(char);
          } else {
            items.push('');
          }
        }
    
        return items;
      }, [value, valueLength]);


      

      const focusToNextInput = (target: HTMLElement) => {
        const nextElementSibling =
        target.nextElementSibling as HTMLInputElement | null;

        if (nextElementSibling) {
        nextElementSibling.focus();
        }
      };


      const inputOnChange = (
        e: React.ChangeEvent<HTMLInputElement>,
        idx: number
      ) => {
        const target = e.target;
        let targetValue = target.value.trim();

        const isTargetValueDigit = RE_DIGIT.test(targetValue);
    
        if (!isTargetValueDigit && targetValue !== '') {
          return;
        }

        const nextInputEl = target.nextElementSibling as HTMLInputElement | null;

        if (!isTargetValueDigit && nextInputEl && nextInputEl.value !== '') {
        return;
        }
    
        targetValue = isTargetValueDigit ? targetValue : ' ';

        const targetValueLength = targetValue.length;
    
        if (targetValueLength === 1) {
            const newValue =
              value.substring(0, idx) + targetValue + value.substring(idx + 1);
      
            onChange(newValue);
      
            if (!isTargetValueDigit) {
              return;
            }

            focusToNextInput(target);
        } else {
      
            const nextElementSibling =
              target.nextElementSibling as HTMLInputElement | null;
      
            if (nextElementSibling) {
              nextElementSibling.focus();
            }
           else if (targetValueLength === valueLength) {
            onChange(targetValue);
      
            target.blur();
          }
        }
      };
 

      const inputOnFocus = (e: React.FocusEvent<HTMLInputElement>) => {
        const { target } = e;
    
        const prevInputEl =
            target.previousElementSibling as HTMLInputElement | null;

        if (prevInputEl && prevInputEl.value === '') {
            return prevInputEl.focus();
        }

        target.setSelectionRange(0, target.value.length);
      };



    
      return (
        <div className="digit-group">
          {valueItems.map((digit, idx) => (
            <Input
              autoFocus 
              key={idx}
              type="text"
              inputMode="numeric"
              autoComplete="one-time-code"
              pattern="\d{1}"
              maxLength={valueLength}
              className="digit-input"
              value={digit}
              onChange={(e) => inputOnChange(e, idx)}
              onFocus={inputOnFocus}
          />
          ))}
        </div>
      );
}