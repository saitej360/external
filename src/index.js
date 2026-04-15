const e=require("express");
const j=require("jsonwebtoken");
const f=require("fs");
const a=e();
a.use(e.json());
a.use(e.static(__dirname));
const d=e.Parse
