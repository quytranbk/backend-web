
class BiddingSessionModel {
    itemname;
    category;
    itemdescription;
    startdate;
    enddate;
    startprice;
    minimumincreasebid;
    imagelink;
    itemcondition;
    user;
    biddinglog;
    currentbid;
    constructor (entity) {
        entity = entity || {};
        this.itemname = entity.itemname;
        this.category = entity.category;
        this.itemdescription = entity.itemdescription;
        this.startdate = entity.startdate;
        this.enddate = entity.enddate;
        this.startprice = entity.startprice;
        this.minimumincreasebid = entity.minimumincreasebid;
        this.imagelink = entity.imagelink;
        this.itemcondition = entity.itemcondition;
        this.user = entity.user;
        this.biddinglog = entity.biddinglog;
        this.currentbid = entity.currentbid;
    }
}

class ResCurrentUserBiddingSessionModel {
    itemname;
    // category;
    itemdescription;
    startdate;
    enddate;
    startprice;
    minimumincreasebid;
    imagelink;
    itemcondition;
    user;
    biddinglog;
    currentbid;
    bidcount;
    constructor (entity) {
        entity = entity || {};
        this.itemname = entity.itemname;
        this.category = entity.category;
        this.itemdescription = entity.itemdescription;
        this.startdate = entity.startdate;
        this.enddate = entity.enddate;
        this.startprice = entity.startprice;
        this.minimumincreasebid = entity.minimumincreasebid;
        this.imagelink = entity.imagelink;
        this.itemcondition = entity.itemcondition;
        this.user = entity.user;
        this.biddinglog = entity.biddinglog;
        this.currentbid = entity.currentbid;
        this.bidcount = entity.bidcount;
    }
}
class BidLogModel {
    bidamount;
    biddate;
    user;
    constructor (entity) {
        entity = entity || {};
        this.bidamount = entity.bidamount;
        this.biddate = entity.biddate;
        this.user = entity.user;
    }
}

class ResultBidLogModel {
    bidamount;
    biddate;
    user;
    biddingsession;
    constructor (entity) {
        entity = entity || {};
        this.bidamount = entity.bidamount;
        this.biddate = entity.biddate;
        this.user = entity.user;
        this.biddingsession = new BiddingSessionModel(entity.biddingsession);
    }
}

module.exports = { BiddingSessionModel, BidLogModel, ResultBidLogModel, ResCurrentUserBiddingSessionModel };