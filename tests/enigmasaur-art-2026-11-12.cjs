const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict'),crypto=require('node:crypto');
const catalogue=fs.readFileSync('site/catalogue.js','utf8'),app=fs.readFileSync('site/app.js','utf8');
const art=app.split('\n').find(l=>l.startsWith('function creatureArt('));
vm.runInNewContext(catalogue+'\n'+art+`
const c=creatureCatalogue.find(c=>c.name==='Enigmasaur');assert.equal(c.artworkPending,false);assert.equal(c.slug,'enigmasaur');
const markup=creatureArt('Enigmasaur');assert.ok(markup.includes('assets/creatures/enigmasaur.png?v=4'));assert.ok(markup.includes('<img'));assert.ok(!markup.includes('Artwork pending'));assert.ok(markup.includes('width="160"'));assert.ok(markup.includes('height="160"'));
assert.ok(creatureArt('Rex').includes('assets/creatures/rex.png?v=4'));assert.equal(creatureCatalogue.length,203);
`,{assert});
const png=fs.readFileSync('site/assets/creatures/enigmasaur.png');assert.equal(png.subarray(0,8).toString('hex'),'89504e470d0a1a0a');assert.equal(png.readUInt32BE(16),160);assert.equal(png.readUInt32BE(20),160);assert.equal(png[25],6);
assert.equal(crypto.createHash('sha256').update(png).digest('hex'),'a817e97f60d7f0476eaa3ee77ecd1c37b1e96946b0913a0b58c38442694dd0c3');
const html=fs.readFileSync('site/index.html','utf8');assert.ok(html.includes('catalogue.js?v=enigmasaur-art-nov12'));assert.ok(html.includes('noindex'));assert.ok(html.includes('manifest'));assert.ok(!/youtube\.com|youtu\.be|<iframe|References for/.test(html));
assert.ok(!app.includes('/api/official-rate'));assert.ok(app.includes('official-rate.json?checked='));assert.ok(app.includes('age>24*60*60*1000'));
console.log('Enigmasaur PNG dimensions/hash, catalogue image routing, original Rex route, cache refresh and preserved app constraints passed.');
