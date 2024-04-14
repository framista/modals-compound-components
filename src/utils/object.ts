export const transformToDict = <T extends object>(data: T[], key: string & keyof T): Record<string, T> => 
    data.reduce((p, c) => ({...p, [(c[key]) as unknown as string]: c }), {} as Record<string, T>);