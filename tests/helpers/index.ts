export const getMockRequest = ({
  url,
  method,
  headers,
  body,
}: {
  url: string
  method: "GET" | "POST" | "PUT" | "DELETE"
  headers: Record<string, string>
  body: string
}) => {
  return {
    url: url ?? "http://localhost:3000",
    method: method ?? "GET",
    headers: headers ?? {},
    body: body ?? null,
  }
}

export const getMockResponse = ({
  status,
  headers,
  body,
}: {
  status: number
  headers: Record<string, string>
  body: string
}) => {
  return {
    status: status ?? 200,
    headers: headers ?? {},
    body: body ?? null,
  }
}

export const getContext = (headers?: any, params?: any, query?: any) => {
  return {
    req: {
      headers,
    },
    params,
    query,
  } as unknown as any
}
