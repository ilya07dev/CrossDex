import{n as t,p as s,aL as o}from"./index-992c5bf9.js";class l{get chainId(){return this._chainId}constructor(r,n,c){t(this,"contractWrapper",void 0),t(this,"storage",void 0),t(this,"erc20",void 0),t(this,"_chainId",void 0),t(this,"transfer",s(async(a,e)=>this.erc20.transfer.prepare(a,e))),t(this,"transferFrom",s(async(a,e,i)=>this.erc20.transferFrom.prepare(a,e,i))),t(this,"setAllowance",s(async(a,e)=>this.erc20.setAllowance.prepare(a,e))),t(this,"transferBatch",s(async a=>this.erc20.transferBatch.prepare(a))),this.contractWrapper=r,this.storage=n,this.erc20=new o(this.contractWrapper,this.storage,c),this._chainId=c}onNetworkUpdated(r){this.contractWrapper.updateSignerOrProvider(r)}getAddress(){return this.contractWrapper.readContract.address}async get(){return this.erc20.get()}async balance(){return await this.erc20.balance()}async balanceOf(r){return this.erc20.balanceOf(r)}async totalSupply(){return await this.erc20.totalSupply()}async allowance(r){return await this.erc20.allowance(r)}async allowanceOf(r,n){return await this.erc20.allowanceOf(r,n)}}export{l as S};
