import * as React from 'react';

// @ts-ignore
import isEqual from 'lodash/isEqual';

import { useTableContext } from '../../context';
import { ITableRow } from '../../interfaces';
import RowContextProvider from './context';
import RowsDesktop from './Desktop';
import RowsMobile from './Mobile';

const RowsBase = React.memo(() => {
  const { setAnchorEl, setOptions, setCurrentRow, onActionsClick, isMobile } = useTableContext();

  const [currentItemCollapse, setCurrentItemCollapse] = React.useState<unknown | null>(null);

  const handleSetCurrentRow = React.useCallback(
    (event: React.MouseEvent<HTMLElement>, row: ITableRow = null) => {
      if (!row.data) {
        console.error('@eduzz/houston-ui: when the share component is used, the line must offer the property `data`');
      }

      setCurrentRow(row);
      setAnchorEl(event.currentTarget);
      setOptions(row?.options);
    },
    [setAnchorEl, setOptions, setCurrentRow]
  );

  const handleClickCollapse = React.useCallback(
    (row: ITableRow) => {
      const callback = row?.collapse?.onCollapse;
      const data = row?.data ?? {};

      if (currentItemCollapse && isEqual(currentItemCollapse, data)) {
        callback && callback(null);
        setCurrentItemCollapse(null);
        return;
      }

      callback && callback(data);
      setCurrentItemCollapse(data);
    },
    [currentItemCollapse]
  );

  const handleClickActions = React.useCallback(
    (data: unknown) => {
      onActionsClick && onActionsClick(data);
    },
    [onActionsClick]
  );

  return (
    <RowContextProvider
      value={{
        currentItemCollapse,
        setCurrentItemCollapse,
        handleClickCollapse,
        handleSetCurrentRow,
        handleClickActions
      }}
    >
      {isMobile && <RowsMobile />}
      {!isMobile && <RowsDesktop />}
    </RowContextProvider>
  );
});

export default RowsBase;
