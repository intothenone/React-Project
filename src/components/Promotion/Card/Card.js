import React from 'react'
import './Card.css'

const PromotionCard = ({promotion}) => (
    <div className="promotion-card">
        <img src={promotion.imageUrl} alt={promotion.title} className="promotion-card__image"/>
        <div className="promotion-card__info">
            <h1 className="promotion-card__title">{promotion.title}</h1>
            <span className="promotion-card__price">R$ {promotion.price}</span>
            <footer className="promotion-card__footer">
                {promotion.comments.length > 0 && (
                    <div className="promotion-card__comment">"{promotion.comments[0].comment}"</div>
                )}
                <div className="promotion-card__comments-count">{promotion.comments.length}{' '} Comentário{promotion.comments.length > 1 ? 's' : ''}</div>
                <a href={promotion.url} target="_blank"  rel="noreferrer" className="promotion-card__link">Ir para o site</a>
            </footer>
        </div>
    </div>
)

export default PromotionCard