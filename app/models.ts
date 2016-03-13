interface Toolkit {
    name:String;
    acronym:String;
    snapshots:Snaphot[];
};

interface Snaphot {
    name:String;
    creationDate:Date;
    components:Component[];
    changes:Change[];
};

interface Component {
    name:String;
};

interface Change {
    id:String;
    componentName:String;
    description:String;
    isBreaking:Boolean;
};