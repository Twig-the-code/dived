import { I18n } from "@aws-amplify/core";
import React from "react";
import { CardPropType } from "../Card";

export const ConfirmCard = props => {
  const { card, status, onClick, onConfirm } = props;
  return (
    <div className="confirm">
      <div className={`confirm__card card--${card.type} card--${status}`}>
        <div className="card__excerpt">
          {I18n.get("Confirm card intro")}
        </div>
        <div className="card__number">
          <span>{card.number}</span>
        </div>
        <div className="card__title">
          {I18n.get(`Card ${card.number} title`)}
        </div>
        <div className="card__excerpt">
          {I18n.get("Confirm card tip")}
        </div>
        <div className="confirm__buttons">
          <button
            type="button"
            className="confirm confirm--cancel"
            onClick={e => {
              onClick(card);
            }}
          >
            {I18n.get('cancel')}
          </button>
          <button
            type="button"
            className="confirm confirm--confirm"
            onClick={e => {
              onClick(card);
              onConfirm(card);
            }}
          >
            {I18n.get('confirm')}
          </button>
        </div>
      </div>
    </div>
  );
};

ConfirmCard.propTypes = {
  card: CardPropType.isRequired,
};


export const ConfirmRemovalOfProgressCard = props => {
  const { card, status, onClick, onRemoval } = props;
  return (
    <div className="confirm">
      <div className={`confirm__card card--${card.type} card--${status}`}>
        <div className="card__excerpt">
          {I18n.get("Confirm removal intro")}
        </div>
        <div className="card__number">
          <span>{card.number}</span>
        </div>
        <div className="card__title">
          {I18n.get(`Card ${card.number} title`)}
        </div>
        <div className="card__excerpt">
          {I18n.get("Confirm removal tip")}
        </div>
        <div className="confirm__buttons">
          <button
            type="button"
            className="confirm confirm--cancel"
            onClick={e => {
              onClick(card);
            }}
          >
            {I18n.get('cancel')}
          </button>
          <button
            type="button"
            className="confirm confirm--confirm"
            onClick={e => {
              onClick(card);
              onRemoval(card);
            }}
          >
            {I18n.get('remove')}
          </button>
        </div>
      </div>
    </div>
  );
};