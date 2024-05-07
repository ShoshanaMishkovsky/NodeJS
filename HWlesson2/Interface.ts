  interface CoinsRes{
    result: string;
    documentation: string;
    time_last_update_unix: number;
    time_last_update_utc:Date
    time_next_update_unix: number
    time_next_update_utc: Date
    base_code: string  
    conversion_rates: {
        [key: string]: number;
    };
}
export default CoinsRes;