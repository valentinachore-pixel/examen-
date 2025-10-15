const pricing={standard:{base:5,perKm:2.8},comfort:{base:7,perKm:3.6},van:{base:10,perKm:4.2},premium:{base:15,perKm:6}};
const nightSurcharge=0.2;
function toCurrency(v){return 'Bs. '+v.toFixed(2)}
function isNight(dt){if(!dt)return false;const d=new Date(dt);const h=d.getHours();return h>=22||h<6}
function calcFare(dist,type,dt){const cfg=pricing[type]||pricing.standard;let fare=cfg.base+dist*cfg.perKm;if(isNight(dt))fare*=1+nightSurcharge;return fare}
document.getElementById('calcBtn').addEventListener('click',()=>{
  const dist=parseFloat(document.getElementById('distance').value)||0;
  const type=document.getElementById('vehicle').value;
  const dt=document.getElementById('datetime').value;
  const fare=calcFare(dist,type,dt);
  document.getElementById('farePrice').textContent=toCurrency(fare);
});
document.getElementById('bookingForm').addEventListener('submit',e=>{
  e.preventDefault();
  alert('Reserva confirmada');
});
