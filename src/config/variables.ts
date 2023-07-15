
export const getEnvVar = (key: string) => {
    /*@ts-ignore*/
    const env = import.meta.env[key];
    if (env === undefined) {
      console.error(`Env variable ${key} is required`);
    }
  
    return env || "";
};

export const RPC_ETHER = getEnvVar("VITE_RPC_ETHER");
export const RPC_BNB = getEnvVar("VITE_RPC_BNB");
export const RPC_POLYGON = getEnvVar("VITE_RPC_POLYGON");

export const RPC_NETWORK:Record<number, string> = {
  1:RPC_ETHER,
  56:RPC_BNB,
  137:RPC_POLYGON
}