export default function ServiceChargeCard({ service }) {
  return (
    <div className="service-charge-item">
      <div className="charge-info">
        <div className="charge-name">{service.name}</div>
        {service.note && <div className="charge-note">{service.note}</div>}
      </div>
      {service.price && (
        <div className={'charge-price' + (typeof service.price === 'number' ? '' : ' charge-text')}>{typeof service.price === 'number' ? '₹' + service.price.toLocaleString('en-IN') : service.price}</div>
      )}
    </div>
  )
}
