import React, { memo } from 'react';
import Theme from 'styles/themes/main-theme';
import {
  Details,
  FieldSet,
  Input,
  Label,
  Legend,
  Options,
  Summary,
  Title,
  Wrapper,
} from './styles';

export interface Option {
  title: string;
  key: string | number;
}

interface Props {
  label: string;
  options: Option[];
  setOptionSelected: React.Dispatch<React.SetStateAction<Option>>;
  optionSelectedState: Option | undefined;
}

export const Dropdown = memo(
  ({ label, options, optionSelectedState, setOptionSelected }: Props) => {
    const ref = React.useRef<HTMLDetailsElement>(null);

    const handleClick = (optionsSelected: Option) => {
      closeSummary();
      setOptionSelected(optionsSelected);
    };

    const closeSummary = () => {
      ref.current?.removeAttribute('open');
    };

    return (
      <Theme>
        <Wrapper>
          <FieldSet>
            <Legend>{optionSelectedState?.title || label}</Legend>
            <Details ref={ref}>
              <Summary>{optionSelectedState?.title || label}</Summary>
              <Options>
                {options.map((item, index) => {
                  return (
                    <Label key={index}>
                      <Input
                        defaultChecked={item.key === optionSelectedState?.key}
                        onClick={() => handleClick(item)}
                        type="radio"
                        name="radio"
                      />
                      <Title>{item.title}</Title>
                    </Label>
                  );
                })}
              </Options>
            </Details>
          </FieldSet>
        </Wrapper>
      </Theme>
    );
  },
);
