export class Response {
    readonly status: number
    readonly result: any

    constructor(status: number,
        result: any) {
        this.status = status
        this.result = result
    }

    toString(): string {
        return JSON.stringify({
            status: this.status,
            result: this.result
        })
    }
}
export class Http {
    static POST: string = "POST"
    static GET: string = "GET"

    static async Init(method: string,
        url: string,
        body: string | FormData | null,
        action?: (response: Response) => any): Promise<Response> {
        try {
            let headers = {
                'Content-Type': 'application/json'
            }
            let api: string = `/backend/${url}`
            if (url.toLowerCase().indexOf("http://"))
                api = url

            const response = await fetch(api, {
                method: method,
                headers: headers,
                body: body
            })

            const status = response.status
            const result = await response.text()
            const res = new Response(status, result)

            if (action) action(res)

            return res
        } catch (error) {
            throw new Error(error)
        }
    }
}