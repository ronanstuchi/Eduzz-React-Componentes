import * as React from 'react';

import PaginationMUI from '@mui/material/Pagination';
import { useContextSelector } from 'use-context-selector';

import SelectField from '../../Forms/Select';
import TextField from '../../Forms/Text';
import Column from '../../Grid/Column';
import Row from '../../Grid/Row';
import createUseStyles from '../../styles/createUseStyles';
import Typography from '../../Typography';
import TableContext from '../context';

type ITablePaginationExtends = 'id' | 'className' | 'children';

export interface ITablePagination extends Pick<React.HTMLAttributes<HTMLTableRowElement>, ITablePaginationExtends> {
  page: number;
  perPage: number;
  total: number;
  optionsPerPage?: number[] | 'string' | false;
  labelItensPerPage?: React.ReactNode;
  labelGoToPage?: React.ReactNode;
  onChangePage: (page: number) => void;
  onChangePerPage: (rowsPerPage: number) => void;
}

const useStyles = createUseStyles(theme => ({
  td: {
    padding: '12px 0'
  },

  perPage: {
    width: 200,
    display: 'inline-flex',
    alignItems: 'center',

    '& > p': {
      whiteSpace: 'nowrap',
      marginRight: theme.spacing(2),
      color: theme.colors.grey[600]
    }
  },

  labels: {
    display: 'inline-flex',
    alignItems: 'center',

    '& > p': {
      whiteSpace: 'nowrap',
      marginRight: theme.spacing(2),
      color: theme.colors.grey[600]
    },

    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },

  input: {
    maxWidth: 50
  },

  pages: {
    display: 'flex',
    justifyContent: 'flex-end',
    height: '100%',
    alignItems: 'center',

    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(2),
      justifyContent: 'center'
    }
  }
}));

const Pagination = React.memo<ITablePagination>(
  ({
    page,
    optionsPerPage: optionsPerPageProp,
    onChangePerPage,
    onChangePage,
    total,
    perPage,
    labelGoToPage,
    labelItensPerPage
  }) => {
    const classes = useStyles();

    const loading = useContextSelector(TableContext, context => context.loading);

    const [pageInput, setPageInput] = React.useState<string>(page?.toString());

    const optionsPerPage = React.useMemo(() => {
      if (optionsPerPageProp === false) {
        return null;
      }

      if (typeof optionsPerPageProp === 'string') {
        return optionsPerPageProp.split(',').map(value => ({ label: value, value: Number(value) }));
      }

      return (optionsPerPageProp ?? [5, 10, 25, 50]).map(value => ({ label: String(value), value }));
    }, [optionsPerPageProp]);

    const handlePageInputChange = React.useCallback(
      (
        valueOrEvent: string | React.KeyboardEvent<HTMLDivElement>,
        event?:
          | React.KeyboardEvent<HTMLDivElement>
          | React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
          | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      ) => {
        let enterPressed = false;
        let value = '';

        if (typeof valueOrEvent === 'object') {
          event = valueOrEvent;
          enterPressed = valueOrEvent.key?.toLowerCase() === 'enter';
          value = (valueOrEvent.target as any).value;
        } else {
          value = valueOrEvent;
        }

        setPageInput(value);

        if (event.type === 'change' || (event.type === 'keyup' && !enterPressed)) {
          return;
        }

        let currentPage = Math.floor(Number(value));
        const maxPage = Math.ceil(total / perPage);

        if (!currentPage) {
          currentPage = 1;
        }

        if (currentPage > maxPage) {
          currentPage = maxPage;
        }

        if (currentPage != Number(value)) {
          setPageInput(currentPage.toString());
        }

        if (currentPage === page) {
          return;
        }

        onChangePage(currentPage);
      },
      [onChangePage, page, perPage, total]
    );

    const handleChangePerPage = React.useCallback((value: any) => onChangePerPage(Number(value)), [onChangePerPage]);

    const handleChangePage = React.useCallback(
      (e: React.SyntheticEvent, page: number) => onChangePage(page),
      [onChangePage]
    );

    React.useEffect(() => {
      const timeout = setTimeout(() => setPageInput(page?.toString()), 500);
      return () => clearTimeout(timeout);
    }, [page]);

    return (
      <tfoot>
        <tr>
          <td colSpan={1000} className={classes.td}>
            <Row>
              <Column xs={12} sm='auto'>
                <Row justifyContent='center'>
                  <Column xs='auto' className={classes.perPage}>
                    <Typography size='small' fontWeight='semibold'>
                      {labelItensPerPage ?? 'Itens por página:'}
                    </Typography>

                    <SelectField
                      disabled={loading}
                      size='small'
                      margin='none'
                      options={optionsPerPage}
                      value={perPage}
                      onChange={handleChangePerPage}
                    />
                  </Column>

                  <Column xs='auto' className={classes.labels}>
                    <Typography size='small' fontWeight='semibold'>
                      {labelGoToPage ?? 'Ir para:'}
                    </Typography>

                    <TextField
                      margin='none'
                      size='small'
                      disabled={loading}
                      value={pageInput}
                      className={classes.input}
                      onChange={handlePageInputChange}
                      onKeyUp={handlePageInputChange}
                      onBlur={handlePageInputChange}
                    />
                  </Column>
                </Row>
              </Column>

              <Column xs={12} sm={true}>
                <div className={classes.pages}>
                  <PaginationMUI
                    count={Math.ceil(total / perPage)}
                    page={page ?? 1}
                    disabled={loading}
                    shape='rounded'
                    size='medium'
                    onChange={handleChangePage}
                  />
                </div>
              </Column>
            </Row>
          </td>
        </tr>
      </tfoot>
    );
  }
);

export default Pagination;
