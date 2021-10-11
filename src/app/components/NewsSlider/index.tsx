import React, { memo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import ThemeProviderWrapper from 'styles/themes/themeProvider';
import { useCheckIsMediumScreen } from 'utils/helpers';
import { newsSliceActions, useNewsSliceSlice } from './slice';
import { selectNewsSlice } from './slice/selectors';
import {
  ArrowButtonWrapper,
  ArrowLeftIconCustomized,
  ArrowRightCustomized,
  Content,
  Link,
  Wrapper,
} from './styles';

interface Props {}

export const NewsSlider = memo((props: Props) => {
  useNewsSliceSlice();

  const [loopOverSlidesState, setLoopOverSlides] = useState<boolean>(true);
  const sliceState = useSelector(selectNewsSlice);
  const dispatch = useDispatch();
  const isMediumScreen = useCheckIsMediumScreen();

  const Image: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string | undefined;
    }
  > = sliceState.selected.Image;

  const onGoToNext = () => {
    setLoopOverSlides(false);
    dispatch(newsSliceActions.goToNext());
  };

  const onGoToPrevious = () => {
    setLoopOverSlides(false);
    dispatch(newsSliceActions.goToNext());
  };

  React.useEffect(() => {
    let loopTimeoutID: NodeJS.Timeout = setInterval(() => {
      dispatch(newsSliceActions.goToNext());
    }, 4000);

    if (!loopOverSlidesState) {
      clearInterval(loopTimeoutID);
    }

    return () => clearInterval(loopTimeoutID);
  }, [dispatch, loopOverSlidesState]);

  return (
    <BrowserRouter>
      <ThemeProviderWrapper>
        {isMediumScreen && (
          <Wrapper {...props}>
            <ArrowButtonWrapper onClick={() => onGoToPrevious()}>
              <ArrowLeftIconCustomized />
            </ArrowButtonWrapper>

            <Content key={sliceState.selected.id}>
              {sliceState.selected && <Image></Image>}
              {sliceState.selected.title}
              <Link to={sliceState.selected.link.url}>
                {sliceState.selected.link.label}
              </Link>
            </Content>

            <ArrowButtonWrapper onClick={() => onGoToNext()}>
              <ArrowRightCustomized />
            </ArrowButtonWrapper>
          </Wrapper>
        )}
      </ThemeProviderWrapper>
    </BrowserRouter>
  );
});
